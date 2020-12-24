// import React from 'react';
// import Main from './components/Main/Main'
// import Details from './components/Details/Details';
// import { Grid } from '@material-ui/core';
// import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

// import useStyles from './styles';

// const App = () => {
//     const classes = useStyles();

//     return (
//         <div>
//             <Grid classname={ classes.grid } container spacinng={0} alignItems="center" justify="center" style={{height: '100vh'}}>
//                 <Grid item xs={12} sm={4}>
//                     <Details title="Income"/>
//                 </Grid>
//                 <Grid item xs={12} sm={3}>
//                     <Main />
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                     <Details title="Expense"/>
//                 </Grid>
//             </Grid> 
//             <div>
//             <PushToTalkButtonContainer>
//                 <PushToTalkButton />
//             </PushToTalkButtonContainer>
//             </div>

//         </div>
//     )
// }

// export default App


import React, {useEffect, useRef} from 'react';
import Main from './components/Main/Main'
import Details from './components/Details/Details';
import { Grid } from '@material-ui/core';
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

import useStyles from './styles'

import { SpeechState, useSpeechContext } from "@speechly/react-client";

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()    

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div>
      <title>Expense Tracker</title>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </Grid>
    </div>
  );
};

export default App;
