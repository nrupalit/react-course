import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

PrivateRoute.propTypes = {
    component: PropTypes.any.isRequired
}

export default function PrivateRoute({ component }) {
    const authenticate = useSelector(state => state.auth.token);
    return authenticate ? (
        component
    ) : (
        <Navigate
            to={`/`}
        />
    );
};