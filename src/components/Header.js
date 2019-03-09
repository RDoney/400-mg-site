import React from 'react';
import _ from 'lodash';

import safePrefix from '../utils/safePrefix';

export default class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href={safePrefix(_.get(this.props, 'pageContext.site.pathPrefix') || '/')} className="logo">
                        <span className="symbol"><img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img_src'))} alt="" /></span><span className="title">{_.get(this.props, 'pageContext.site.siteMetadata.title')}</span>
                    </a>
                    <nav>
                        <ul>
                            <li><a href="#menu">Menu</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
