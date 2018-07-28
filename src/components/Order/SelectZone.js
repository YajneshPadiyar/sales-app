import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';

import ZoneList from '../Zones/ZoneList';
import { getZoneList } from '../Zones/actions';
import { ZONE_TYPE } from '../Zones/constants';

import { zoneListSelector } from './selectors';

const styles = theme => ({});
class SelectZone extends Component {
  componentWillMount(){
    this.props.loadZone({ZONE_TYPE: ZONE_TYPE});
  }
  render(){
    return (
      <ZoneList/>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  ZoneList: zoneListSelector()
});

const mapDispatchToProps = dispatch => {
  return {
    loadZone:(data)=> dispatch(getZoneList(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SelectZone));
