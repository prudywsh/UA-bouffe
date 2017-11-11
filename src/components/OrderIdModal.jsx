import React       from 'react';
import { connect } from 'react-redux';

import { closeModal, closeIntermediateModal, openModal } from '../actions';

const mapStateToProps = state => {
  return {
    modalOrderIdOpened: state.modal.orderId.active
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCancelModal() {
      dispatch(closeModal('orderId'));
    },
    onSubmitOrderId(id) {
      dispatch(closeIntermediateModal('orderId'))
        .then(() => {
          dispatch(openModal('valid', {id}));
        });
    }
  };
};

class OrderIdModal extends React.Component {
  propTypes = {
    modalOrderIdOpened  : React.PropTypes.bool,
    onCancelModal       : React.PropTypes.func,
  };

  render() {
    return (
      <div>
        <div className="b-modal b-order_id-modal" hidden={!this.props.modalOrderIdOpened}>
          <button
            className="b-modal__button b-modal__button--cancel"
            onClick={() => this.props.onCancelModal()}>Annuler</button>
          orderId
          <button
            className="b-modal__button b-modal__button--validate"
            onClick={() => this.props.onSubmitOrderId(1)}>
            Valider</button>
        </div>
        <div className="b-modal-drop" hidden={!this.props.modalValidOpened}></div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderIdModal);