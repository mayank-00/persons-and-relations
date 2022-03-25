import React from "react";
import { connect } from 'react-redux'

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { selectRelationships } from "../../store/persons/selector";


const RelationshipChain = ({ relationChain = [] }) => {

  return <List
    sx={{
      justifyContent: "center",
      marginTop: 6,
      alignItems: "center",
      border: "1px solid grey",
      borderRadius: 2,
      maxWidth: 700,
      paddingX: 2,
      paddingY: 4,
      marginX: "auto",
      marginBottom: 4
    }}

  >

    <ListItem>
      <Typography variant="h5">{relationChain.length ? "Relations" : "No relation found"}</Typography>
    </ListItem>
    {
      relationChain.map((chain, index) => (
        <ListItem
          sx={{ marginBottom: 4 }}
          key={index}
        >
          <CircleIcon color="primary" sx={{ marginX: 4 }} />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            {
              chain.map((ele, ind) => (
                <>
                  <Typography variant="body1" sx={{ marginLeft: 4 }} key={`${index}${ele}`} >{ele}</Typography>
                  {
                    !(ind + 1 === chain.length) && <ArrowForwardIcon sx={{ marginLeft: 4 }} color="primary" />
                  }
                </>
              ))
            }
          </Box>

        </ListItem>
      ))
    }
  </List>
}


const mapStateToProps = (state, { person1, person2 }) => ({
  relationChain: selectRelationships(state, person1, person2)
})

export default connect(mapStateToProps, {})(RelationshipChain)
