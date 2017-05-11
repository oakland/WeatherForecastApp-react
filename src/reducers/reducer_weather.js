import {FETCH_WEATHER} from "../actions/index";

export default function(state=[], action) {
	// console.log("Action recieved: ", action);
	switch (action.type) {
	case FETCH_WEATHER:
		// return state.concat([action.payload.data]);
		return [action.payload.data, ...state];
	}
	return state;
}

// reducer 是递归的意思，所以 reducer 的作用就是改变 state，传入一个 prevState，然后再加上一个 action，返回一个新的 state