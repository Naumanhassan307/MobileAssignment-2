import {ADD_TASK, FETCH_TASK, DELETE_TASK} from '../TypeConstants';
import {db} from '../../config/Firebase';

export const TaskAddAct = (data) => async (dsipatch) => {
  console.log('Data in Action', data);
  try {
     await db.collection('todos').add(data);
    
  } catch (error) {
    console.log('error in add actio ', error);
  }

  dsipatch({
    type: ADD_TASK,
    payload: data,
  });
};

export const TaskFetchAct = ()=> async (dsipatch) => {
 let Arr = [];
  try {
   let res = await db.collection('todos').get();

   
   res.forEach((doc)=>{

    Arr.push({
        ...doc.data(),
        docId: doc.id,
    })
   })

   console.log("Array from DB in fetch action", Arr);

  } catch (error) {
    console.log('error in add actio ', error);
  }

  dsipatch({
    type: FETCH_TASK,
    payload: Arr,
  });
};

export const TaskDeleteAct = (docid, taskId) => async dsipatch => {
    console.log("dcid in action", docid);
    console.log("task in action", taskId);
  try {
    await db.collection('todos').doc(docid).delete();
  } catch (error) {
    console.log('error in delete', error);
  }

  dsipatch({
    type: DELETE_TASK,
    payload: taskId,
  });
};
