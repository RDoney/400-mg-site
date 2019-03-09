import React from 'react';
import _ from 'lodash';

import safePrefix from '../utils/safePrefix';

export default class Menu extends React.Component {
    render() {
        return (
            <nav id="menu">
                <h2>Menu</h2>
                <ul>
                    {_.map(_.get(this.props, 'pageContext.menus.main'), (item, item_idx) => (
                        <li key={item_idx}><a href={safePrefix(_.get(item, 'url'))}>{_.get(item, 'title')}</a></li>
                    ))}
                </ul>
            </nav>
        );
    }
}
