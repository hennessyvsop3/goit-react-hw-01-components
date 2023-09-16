import { Component } from "react";
import React from "react";
import PropTypes from 'prop-types'

const btnLIst = ['good', 'neutral', 'bad']



export const Feedback = ({onClickBtn}) => {
  return (
    <>
      <div>
        <h2>Please leave feedback</h2>
        <ul>
          {btnLIst.map((btn) => (
            <button key={btn} onClick={() => onClickBtn(btn)}>
              {btn}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
}

Feedback.propTypes = {}



