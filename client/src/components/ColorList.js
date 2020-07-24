import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from './../utils/axiosWithAuth';
import { useParams, useHistory } from "react-router-dom";
import AddColorForm from './AddColorForm';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors, getColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };
  const { push } = useHistory();

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithAuth().put(`colors/${colorToEdit.id}`, colorToEdit)
      .then(res => getColors())
      .catch(err => console.log(err))
  };

  const deleteColor = color => {
    // make a delete request to delete this color
    axiosWithAuth()
      .delete(`/colors/${color.id}`, color)
      .then(res => {
        getColors();
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className="uk-width-medium uk-card uk-card-default uk-card-body uk-margin-bottom">
      <div className='uk-text-center uk-legend'>Colors</div>
      <ul className='uk-list'>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                <span className='uk-float-right' uk-icon="icon: trash"></span>
              </span>{" "}
              {color.color}
            </span>
            <div
              className="uk-float-left uk-margin-right"
              style={{ backgroundColor: color.code.hex , width: '20px', height: '20px', display: 'inline-block'}}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend className='uk-legend uk-text-center'>Edit Color</legend>
          <div className='uk-margin'>
              Color Name:
            <input
              className='uk-input'
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </div>
          <div className='uk=margin'>
              Hex Code:
            <input
              className='uk-input'
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </div>
          <div className="uk-margin-top">
            <button className='uk-button uk-button-default' onClick={() => setEditing(false)}>cancel</button>
            <button className='uk-button uk-button-secondary uk-float-right' type="submit">save</button>
          </div>
        </form>
        )}
      </div>
      {/* <div className="spacer" /> */}
      {/* stretch - build another form here to add a color */}
      <AddColorForm />
    </div>
  );
};

export default ColorList;
