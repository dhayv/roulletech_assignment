from django.shortcuts import render
import requests
from rest_framework.response import Response
from rest_framework.views import APIView


# Create your views here.
# fetch and return categories.
class CategoryList(APIView):
    def get(self, request):
        response = requests.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        data = response.json()
        return Response(data)


# fetch and return recipes by categories.
class RecipeList(APIView):
    def get(self, request):
        category = request.query_params.get('category')
        if not category:
            return Response({'error': "No category found"}, status=404)
        response = requests.get(f'https://www.themealdb.com/api/json/v1/1/filter.php?c={category}')
        data = response.json()
        return Response(data)


# fetch and return recipe details information.
class RecipeDetail(APIView):
    def get(self, request, recipe_id):
        response = requests.get(f'https://www.themealdb.com/api/json/v1/1/lookup.php?i={recipe_id}')
        data = response.json()
        return Response(data)
