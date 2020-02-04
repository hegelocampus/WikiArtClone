import { connect } from 'react-redux';
import TopBar from './top_bar';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'LOGOUT_CURRENT_USER' })
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
