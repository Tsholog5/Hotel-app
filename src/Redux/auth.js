import { createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../Config/Firebase";
import { doc, getDoc, addDoc, collection, setDoc } from "firebase/firestore";

const initialState = {
  user: null,
  isAdmin: false,
  role: "user",
  loading: false,
  error: null,
  passwordResetSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setUser(state, action) {
      const { uid, email, role } = action.payload;
      console.log("Setting user in Redux:", action.payload);
      state.user = { uid, email };
      state.role = role || "user";
      state.isAdmin = role === "admin";
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    logout(state) {
      state.user = null;
      state.role = "user";
      state.isAdmin = false;
      state.loading = false;
      state.error = null;
      state.passwordResetSuccess = false;
    },
    setPasswordResetSuccess(state, action) {
      state.passwordResetSuccess = action.payload;
    },
  },
});

export const forgotPassword =
  ({ email }) =>
  async (dispatch) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Please check your email to reset");
      dispatch(setUser());
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
    }
  };

export const {
  setLoading,
  setUser,
  setError,
  logout,
  setPasswordResetSuccess,
} = authSlice.actions;

export const signUp =
  ({ email, password, name }) =>
  async (dispatch) => {
    dispatch(setLoading());
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const docRef = await addDoc(collection(db, "Users", auth.currentUser.uid, "profile"), {
        name,  
        email,
        role: "client",

      });
      
   
      dispatch(setUser({ uid: userCredential.user.uid, email, name }));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };


export const fetchUserRole = (uid) => async (dispatch) => {
  try {
    const userDoc = await getDoc(doc(db, "Users", uid));

    if (userDoc.exists()) {
      const userData = userDoc.data();
      console.log("User data from Firestore:", userData);

      const role = userData.role || "user";
      const email = userData.email;
      dispatch(setUser({ uid, email, role }));
      console.log(`Fetched role: ${role} for UID: ${uid}`);
      return role;
    }

    dispatch(setUser({ uid, email: null, role: "user" }));
    console.log(
      `No user document found, defaulting to user role for UID: ${uid}`
    );
    return "user";
  } catch (error) {
    console.error("Error fetching user role:", error);
    dispatch(setError(error.message));
    dispatch(setUser({ uid, email: null, role: "user" }));
    return "user";
  }
};

export const signIn =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(setLoading());
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(
        setUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
        })
      );
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

export const signOut = () => async (dispatch) => {
  try {
    await firebaseSignOut(auth);
    dispatch(logout());
  } catch (error) {
    console.error("Error during sign-out:", error);
    dispatch(setError(error.message));
  }
};

export const resetPassword = (email) => async (dispatch) => {
  dispatch(setLoading());
  try {
    await sendPasswordResetEmail(auth, email); 
    dispatch(setPasswordResetSuccess(true)); 
  } catch (error) {
    console.error("Error resetting password:", error.message);
    dispatch(setError(error.message)); 
    dispatch(setPasswordResetSuccess(false));
  }
};

export default authSlice.reducer;
