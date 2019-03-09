import React from 'react';
import _ from 'lodash';
import ReactHtmlParser from 'react-html-parser';

import {Layout} from '../components/index';
import safePrefix from '../utils/safePrefix';
import markdownify from '../utils/markdownify';

export default class Home extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <header>
                    <h1>{ReactHtmlParser(_.get(this.props, 'pageContext.frontmatter.header').replace(/\n/g, '<br />'))}</h1>
                    {ReactHtmlParser(_.get(this.props, 'pageContext.html'))}
                </header>
                <section className="tiles">
                    {_.map(_.orderBy(_.get(this.props, 'pageContext.pages').filter(page => page.relativeDir === 'posts'), 'frontmatter.date', 'desc'), (post, post_idx) => (
                        <article key={post_idx} className={_.get(post, 'frontmatter.home_style')}>
                            <span className="image">
                                <img src={safePrefix(_.get(post, 'frontmatter.home_img'))} alt="" />
                            </span>
                            <a href={safePrefix(_.get(post, 'url'))}>
                                <h2>{_.get(post, 'frontmatter.title')}</h2>
                                <div className="content">
                                    {markdownify(_.get(post, 'frontmatter.excerpt'))}
                                </div>
                            </a>
                        </article>
                    ))}
                </section>
            </Layout>
        );
    }
}
