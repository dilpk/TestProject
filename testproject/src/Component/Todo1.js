import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ResponsiveDialog from "./ModalContent";

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));


function Todo1(props) {
  const [arr, setArr] = React.useState([]);
  const [search, setsearch] = React.useState(``);
  const isEnable = false;

  const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
  
  }

  const setItem = (event) => {
    if (event != "" && event != undefined) {
      const updateUsers = [
        // copy the current users state
        ...arr,
        // now you can add a new object to add to the array
        {id: generateKey(event), name: event}
      ];
      setArr(updateUsers)
    }
    console.log(arr)
  }

  const deleteList = (id) => {
    const newList = arr.filter((item) => {
      return item.name != id.name;
    })
    setArr(newList)
  }

  const searchItem = (event) => {
    setsearch(event.target.value)
  }

  const updateList = (val, index) => {
    let newList = [...arr];
    newList[index].name = val;
    setArr(newList)
  }

  return (
    <Box className="Todo_container" >
      <div style={{ display: "inline-flex" }}>
        <TextField id="outlined-search" label="Search field" type="search" size="small" onKeyUp={searchItem} />
        <ResponsiveDialog setItem1={setItem} btnCss="Todo_addBtn" name="Add" />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Demo className="Todo_listContainer">
            <List >
              {arr.length > 0 && arr.filter(li => li.name?.toLowerCase().includes(search?.toLowerCase())).map((subIndex, indexVal) => {
                return (
                  <ListItem
                    key={subIndex.id}
                    sx={{ boxShadow: 2 }}
                    className="border"
                  >
                    <ListItemText
                      primary={subIndex.name}
                    />
                    <ResponsiveDialog setItem1={updateList} btnCss="Todo_addBtn" name="Edit" curVal={subIndex.name} id={indexVal} />
                    <Button variant="contained" onClick={() => deleteList(subIndex)} className="Todo_deleteBtn">
                      Delete
                    </Button>
                  </ListItem>

                )
              })}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );

}
export default Todo1;