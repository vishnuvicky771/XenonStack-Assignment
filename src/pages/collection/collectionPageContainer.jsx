import { selectIsCollectionFetching } from '../../redux/shop/shopSelector';
import CollectionPage from './collectionPage';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { WithSpinner } from '../../components/with-spinner/withSpinner';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionsPageContainer;
