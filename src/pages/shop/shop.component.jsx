import React from "react";

import CollectionsOverview from "../../components/collection-overview/collection-overview.component";

import { Route } from "react-router";

import CollectionPage from "../collections/collections.component";

const ShopPage=({match})=>(

          
             <div className="shop-page">

             <Route exact path={match.path} component={CollectionsOverview}/>
             
             <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>

            </div>
    
);

export default ShopPage;