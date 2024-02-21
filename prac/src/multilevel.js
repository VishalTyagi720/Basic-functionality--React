import React, { useState } from "react";

function Multilevel () {

    const data = [
        {
          label: "Menu 1",
          submenu:[{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }, { label: "Sub Menu 3" }],
        },
        {
          label: "Menu 2",
          submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
        },
        {
          label: "Menu 3",
          submenu: [
            { label: "Sub Menu 1" },
            { label: "Sub Menu 2" },
            { label: "Sub Menu 3" },
            { label: "Sub Menu 4" },
          ],
        },
        {
          label: "Menu 4",
          submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
        },
      ];

      const [input, setinput] = useState(data);

      const newdata = input.map((item, index) => {
        return (
          <>
              <optgroup label={item.label}></optgroup>
              {item.submenu.map((sub, i) => {
                return (
                  <option key={i} value={sub.label}>{sub.label}</option>
                )
              })}
          </>
        )
      })

    return (
        <div>
            <form>
                <label htmlFor="data">Select Menu </label>
                <select id="data" name="data">
                    {newdata}
                </select>
            </form>
        </div>
    )
}


export default Multilevel;