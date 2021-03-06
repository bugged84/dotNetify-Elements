import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import * as utils from '../utils';
import { Label } from '../display/Label';
import { Frame } from '../layout/Frame';

const Container = styled.div`${props => props.theme.Tab.Container};`;

export class Tab extends React.Component {
   static propTypes = {
      // Sets the active tab.
      active: PropTypes.string,

      // Sets content area's margin.
      margin: PropTypes.string,

      // Removes content area's margin.
      noMargin: PropTypes.bool,

      // Occurs when a tab is activated.
      onActivate: PropTypes.func
   };

   static componentTypes = {
      Container,
      TabContainer: undefined,
      BodyContainer: Frame
   };

   constructor(props) {
      super(props);
      this.state = { active: null };
      this.tabContents = [];
   }

   componentDidMount() {
      this.tabContents = React.Children.map(this.props.children, (child, idx) => ({
         key: this.getItemKey(child, idx),
         content: child.props.children
      }));

      this.setActiveState(this.props.active);
   }

   componentWillUpdate(props) {
      // Only make this a controlled tab if 'onActivate' is provided. We'd like to allow the use case where
      // the 'active' property is only used to set the initial active tab.
      if (this.props.active !== props.active && this.props.onActivate) this.setActiveState(props.active);
   }

   getItemKey = (child, idx) => (child.key ? child.key : `${idx}`);
   getDisplayStyle = key => ({ display: this.state.active == key ? 'block' : 'none' });

   handleClick = (event, key, label) => {
      event.preventDefault();
      let canActivate = true;
      if (this.props.onActivate) canActivate = this.props.onActivate(key, label) !== false;
      canActivate && this.setState({ active: key });
   };

   setActiveState(key) {
      if (typeof key !== 'undefined') this.setState({ active: key });
      else if (this.tabContents.length > 0) this.setState({ active: this.tabContents[0].key });
   }

   render() {
      const [ Container, TabContainer, BodyContainer ] = utils.resolveComponents(Tab, this.props);
      const { children, margin, noMargin, style, css, ...props } = this.props;

      const tabItems = React.Children.map(children, (child, idx) => {
         const key = this.getItemKey(child, idx);

         return React.cloneElement(child, {
            key: key,
            active: this.state.active == key,
            onClick: event => this.handleClick(event, key, child.props.label)
         });
      });

      const tabContents = this.tabContents.map(({ key, content }) => (
         <div key={key} style={this.getDisplayStyle(key)}>
            <BodyContainer style={style} css={css} noMargin={noMargin} margin={margin}>
               {content}
            </BodyContainer>
         </div>
      ));

      return (
         <Container>
            <TabContainer {...props}>{tabItems}</TabContainer>
            {tabContents}
         </Container>
      );
   }
}

export class TabItem extends React.Component {
   static propTypes = {
      // Text or component for the tab item's label.
      label: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired,

      // Sets the tab item appearance to active.
      active: PropTypes.bool,

      // Occurs when the tab item is clicked.
      onClick: PropTypes.func
   };

   static componentTypes = {
      TabItemComponent: undefined,
      LabelContainer: Label
   };

   render() {
      const [ TabItemComponent, LabelContainer ] = utils.resolveComponents(TabItem, this.props);
      const { key, label, onClick, active, children, ...props } = this.props;

      return (
         <TabItemComponent active={active} onClick={onClick} {...props}>
            <LabelContainer>{label}</LabelContainer>
         </TabItemComponent>
      );
   }
}
