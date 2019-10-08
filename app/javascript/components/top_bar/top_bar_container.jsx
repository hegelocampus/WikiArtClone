import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions";
import TopBar from "./top_bar";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
