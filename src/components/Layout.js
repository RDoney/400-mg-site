import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                </Helmet>
                    <div id="wrapper">
                        <Header {...this.props} />
                        <Menu {...this.props} />
                        <div id="main">
                            <div className="inner">
                                {this.props.children}
                            </div>
                        </div>
                        <Footer {...this.props} />
                    </div>
            </React.Fragment>
        );
    }
}
