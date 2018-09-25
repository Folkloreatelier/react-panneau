import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isString from 'lodash/isString';
import get from 'lodash/get';
import { PropTypes as PanneauPropTypes } from '@panneau/core';
import { defineMessages, FormattedMessage } from 'react-intl';

const messages = defineMessages({
    label: {
        id: 'core.buttons.upload',
        description: 'The label of the "upload" button',
        defaultMessage: 'Select a file...',
    },
    loadingLabel: {
        id: 'core.buttons.uploading',
        description: 'The label of the "upload" button when loading',
        defaultMessage: 'Uploading...',
    },
});

const propTypes = {
    endpoint: PropTypes.string.isRequired,
    inputName: PropTypes.string,
    accept: PropTypes.string,
    customHeaders: PropTypes.objectOf(PropTypes.string),
    onUploadStart: PropTypes.func,
    onUploadComplete: PropTypes.func,
    onUploadError: PropTypes.func,
    label: PanneauPropTypes.message,
    loadingLabel: PanneauPropTypes.message,
};

const defaultProps = {
    inputName: 'file',
    accept: 'image/*',
    customHeaders: {},
    onUploadStart: null,
    onUploadComplete: null,
    onUploadError: null,
    label: messages.label,
    loadingLabel: messages.loadingLabel,
};

class UploadButton extends Component {
    constructor(props) {
        super(props);

        this.onUploadStart = this.onUploadStart.bind(this);
        this.onUploadComplete = this.onUploadComplete.bind(this);

        this.FileInput = null;
        this.FineUploaderTraditional = null;
        this.uploader = null;

        this.state = {
            ready: false,
            loading: false,
        };
    }

    componentDidMount() {
        import(/* webpackChunkName: "vendor/react-fine-uploader/file-input" */ 'react-fine-uploader/file-input')
            .then((dep) => {
                this.FileInput = dep.default;
                return import(/* webpackChunkName: "vendor/fine-uploader-wrappers" */ 'fine-uploader-wrappers');
            })
            .then((dep) => {
                this.FineUploaderTraditional = dep.default;
                this.uploader = this.createUploader();
                this.setState({
                    ready: true,
                });
            });
    }

    componentWillUnmount() {
        if (this.uploader !== null) {
            this.destroyUploader(this.uploader);
            this.uploader = null;
        }
    }

    onUploadStart() {
        const { onUploadStart } = this.props;

        this.setState({
            loading: true,
        });

        if (onUploadStart !== null) {
            onUploadStart();
        }
    }

    onUploadComplete(id, name, response) {
        const { onUploadComplete, onUploadError } = this.props;

        const success = get(response, 'success', true);

        this.setState({
            loading: false,
        });

        if (success && onUploadComplete !== null) {
            onUploadComplete(response, id, name);
        } else if (!success && onUploadError !== null) {
            onUploadError(response, id, name);
        }
    }

    createUploader() {
        const { FineUploaderTraditional } = this;
        const { endpoint, inputName, customHeaders } = this.props;
        const uploader = new FineUploaderTraditional({
            options: {
                request: {
                    endpoint,
                    inputName,
                    customHeaders,
                },
            },
        });
        uploader.on('upload', this.onUploadStart);
        uploader.on('complete', this.onUploadComplete);
        return uploader;
    }

    destroyUploader(uploader) {
        uploader.methods.cancelAll();
        uploader.off('upload', this.onUploadStart);
        uploader.off('complete', this.onUploadComplete);
    }

    render() {
        const { ready } = this.state;
        if (!ready) {
            return null;
        }

        const { FileInput } = this;
        const { accept, label: normalLabel, loadingLabel } = this.props;
        const { loading } = this.state;
        const label = loading ? loadingLabel : normalLabel;

        return (
            <FileInput accept={accept} uploader={this.uploader}>
                <div>
                    <button
                        type="button"
                        className={classNames({
                            btn: true,
                            'btn-primary': true,
                        })}
                        disabled={loading}
                        onClick={this.onClickSelect}
                    >
                        {isString(label) ? (
                            label
                        ) : (
                            <FormattedMessage {...label} />
                        )}
                    </button>
                </div>
            </FileInput>
        );
    }
}

UploadButton.propTypes = propTypes;
UploadButton.defaultProps = defaultProps;

export default UploadButton;
