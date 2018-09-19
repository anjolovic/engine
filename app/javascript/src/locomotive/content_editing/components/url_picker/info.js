import React, { Component } from 'react';
import { isBlank } from '../../utils/misc';

const UrlInfo = ({ value, handleEditing, handleDone }) => (
  <div className="url-picker-info">
    {isBlank(value) ? (
      <div className="url-picker-info--value editor-input--text is-blank">No URL for now</div>
    ) : (
      <div className="url-picker-info--value editor-input--text">
        <span className="label label-primary">{value.label[0]}</span>
        &nbsp;
        {value.label[1]}
      </div>
    )}
    <div className="url-picker-info--actions">
      <button className="btn btn-sm btn-default" onClick={handleEditing}>
        Change
      </button>
      {handleDone && (
        <button className="btn btn-sm btn-default" onClick={handleDone}>
          Done
        </button>
      )}
    </div>
  </div>
)

export default UrlInfo;
