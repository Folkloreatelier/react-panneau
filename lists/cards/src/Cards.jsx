/* eslint-disable react/jsx-props-no-spreading */
// import { defineMessages } from 'react-intl';
import { PropTypes as PanneauPropTypes } from '@panneau/core';
import Card from '@panneau/element-card';
import FormActions from '@panneau/element-item-actions';
import Loading from '@panneau/element-loading';
import Pagination from '@panneau/element-pagination';
import PropTypes from 'prop-types';
import { stringify as stringifyQuery } from 'query-string';
import React from 'react';

const propTypes = {
    resource: PanneauPropTypes.resource.isRequired,
    items: PanneauPropTypes.items,
    query: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    page: PropTypes.number,
    lastPage: PropTypes.number,
    total: PropTypes.number,
    loading: PropTypes.bool,
    baseUrl: PropTypes.string,
    // onQueryChange: PropTypes.func,
};

const defaultProps = {
    items: [],
    query: null,
    page: null,
    lastPage: null,
    total: null,
    loading: false,
    baseUrl: null,
    // onQueryChange: null,
};

const TableList = ({
    query,
    resource,
    items,
    page,
    lastPage,
    total,
    baseUrl,
    loading,
    // onQueryChange,
}) => {
    const { page: queryPage, ...queryWithoutPage } = query || {};
    const hasQuery = Object.keys(queryWithoutPage).length > 0;
    const { indexIsPaginated: paginated = false } = resource;

    // const columns = fields.filter(({ hidden_in_index: hiddenInIndex = false }) => !hiddenInIndex);

    const currentUrl = `${baseUrl}${
        hasQuery
            ? `?${stringifyQuery(queryWithoutPage, {
                  arrayFormat: 'bracket',
              })}`
            : ''
    }`;

    return (
        <div className="d-flex flex-wrap">
            {items !== null
                ? items.map((it) => {
                      const { id = null } = it || {};
                      return (
                          <div className="w-50 p-2" key={`card-${id}`}>
                              <Card header={id}>
                                  <FormActions resource={resource} item={it} />
                              </Card>
                          </div>
                      );
                  })
                : null}
            {loading ? <Loading /> : null}
            {paginated && lastPage > 1 ? (
                <Pagination
                    page={page}
                    lastPage={lastPage}
                    total={total}
                    url={currentUrl}
                    className="mt-4"
                />
            ) : null}
        </div>
    );
};

TableList.propTypes = propTypes;
TableList.defaultProps = defaultProps;

export default TableList;
