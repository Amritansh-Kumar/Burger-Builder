import React, {Component} from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from './hoc/Layout/Layout'

class App extends Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return (
            <div>
                <Layout>
                    <BurgerBuilder/>
                </Layout>
            </div>
        );
    }
}

export default App;
