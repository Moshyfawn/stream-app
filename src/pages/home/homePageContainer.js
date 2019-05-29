import { connect } from "react-redux";

import HomePage from "./homePage";

const mapStateToProps = state => ({
  isAuthed: state.user.isAuthed
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
