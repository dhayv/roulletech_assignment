import React, { useContext, useEffect, useState } from "react";
import api from '../api.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContext } from "../Context/GlobalContext.jsx";
import { MDBCol, MDBListGroup, MDBListGroupItem, MDBRow, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from 'mdb-react-ui-kit';

const Categories = () => {
  const { categories, setCategories } = useContext(GlobalContext);
  const [basicActive, setBasicActive] = useState('');

  useEffect(() => {
    api.get('api/recipes/categories')
      .then(response => {
        const categoriesData = response.data.categories;
        setCategories(categoriesData);
        console.log(categoriesData)
        setBasicActive(categoriesData[0].strCategory); 
      })
      .catch(error => console.error("Error fetching categories:", error));
  }, [setCategories]);

  const handleBasicClick = (category) => {
    if (basicActive !== category) {
      setBasicActive(category);
    }
  };

  if (!Array.isArray(categories)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h6 className='bg-light p-2 border-top border-bottom'>Categories</h6>
      <MDBRow>
        <MDBCol size={4}>
          <MDBListGroup light small>
            <MDBTabs>
              {categories.map(category => (
                <MDBListGroupItem 
                  key={category.idCategory}
                  action
                  active={basicActive === category.strCategory}
                  className="px-3" >
                  <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick(category.strCategory)}>
                      {category.strCategory}
                    </MDBTabsLink>
                  </MDBTabsItem>
                </MDBListGroupItem>
              ))}
            </MDBTabs>
          </MDBListGroup>
        </MDBCol>

        <MDBCol size={8}>
          <MDBTabsContent>
            {categories.map(category => (
              <MDBTabsPane key={category.id} show={basicActive === category.strCategory}>
                {category.strCategoryDescription}
              </MDBTabsPane>
            ))}
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Categories;
