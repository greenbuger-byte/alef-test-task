import React from 'react';

import Default from "@alef/layers/default";

import FormPersonal from "@alef/components/form-personal";

const Home = () => {
    return (
        <Default title="Главная страница">
           <FormPersonal />
        </Default>
    );
};

export default Home;