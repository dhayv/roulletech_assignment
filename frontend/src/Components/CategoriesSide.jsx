import React, { useContext, useEffect, useState } from 'react';
import api from '../api.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContext } from '../Context/GlobalContext.jsx';
import { MDBCol, MDBListGroup, MDBListGroupItem, MDBRow, MDBTabs, MDBTabsItem, MDBTabsLink } from 'mdb-react-ui-kit';

const Categories = () => {
  const { categories, setCategories, setCategoryView } = useContext(GlobalContext);
  const [basicActive, setBasicActive] = useState('');

  useEffect(() => {
    api.get('api/categories')
      .then(response => {
        const categoriesData = response.data.categories;
        setCategories(categoriesData);
        setBasicActive(categoriesData[0].strCategory);
        setCategoryView(categoriesData[0].strCategory);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, [setCategories]);

  const handleBasicClick = (category) => {
    if (basicActive !== category) {
      setBasicActive(category);
      setCategoryView(category);
    }
  };

  if (!Array.isArray(categories)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h6 className="bg-light p-2 border-top border-bottom">Categories</h6>
      <MDBRow>
        <MDBCol size={4}>
          <MDBListGroup light small>
            <MDBTabs>
              {categories.map(category => (
                <MDBListGroupItem
                  key={category.idCategory}
                  action
                  active={basicActive === category.strCategory}
                  className="px-3"
                >
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
      </MDBRow>
    </div>
  );
};

export default Categories;
