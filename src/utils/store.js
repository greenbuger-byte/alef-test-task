import { connect } from "react-redux";

import { setForm } from "@alef/store/user";

export const mapCommonStates = (TargetComponent) => {

    const mapGlobalStateToProps = (state) => ({
        userState: state.userSlice,
    });

    const mapGlobalDispatchToProps = (dispatch) => ({
        setForm: (payload) => dispatch(setForm(payload)),
    });

    return connect(mapGlobalStateToProps, mapGlobalDispatchToProps)(TargetComponent);
}