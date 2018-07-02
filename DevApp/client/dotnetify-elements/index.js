import dotnetify from 'dotnetify';
import defaultTheme from './theme-light';
import { Element, VMContext, ContextTypes } from './core';
import {
   Alert,
   BarChart,
   Button,
   Card,
   Cell,
   CellPanel,
   Checkbox,
   CheckboxGroup,
   Collapsible,
   DataGrid,
   DateField,
   TimeField,
   DateTimeField,
   DropdownList,
   Field,
   Footer,
   Form,
   Frame,
   GridColumn,
   Header,
   Image,
   Label,
   LineChart,
   Main,
   Markdown,
   MarkdownText,
   MarkdownTOC,
   Modal,
   MultiselectList,
   Nav,
   NavDrawerButton,
   NavMenu,
   NavMenuTarget,
   NumberField,
   Panel,
   PasswordField,
   PieChart,
   RadioGroup,
   RadioToggle,
   Section,
   Tab,
   TabItem,
   TextField,
   TextAreaField,
   Theme,
   withTheme
} from './bootstrap';

let dotNetifyElements = {
   /* Core */
   dotnetify,
   ContextTypes,
   Element,
   VMContext,
   /* Bootstrap */
   Alert,
   BarChart,
   Button,
   Card,
   Cell,
   CellPanel,
   Checkbox,
   CheckboxGroup,
   Collapsible,
   DataGrid,
   DateField,
   TimeField,
   DateTimeField,
   DropdownList,
   Field,
   Footer,
   Form,
   Frame,
   GridColumn,
   Header,
   Image,
   Label,
   LineChart,
   Main,
   Markdown,
   MarkdownText,
   MarkdownTOC,
   Modal,
   MultiselectList,
   Nav,
   NavDrawerButton,
   NavMenu,
   NavMenuTarget,
   NumberField,
   Panel,
   PasswordField,
   PieChart,
   RadioGroup,
   RadioToggle,
   Section,
   Tab,
   TabItem,
   TextField,
   TextAreaField,
   Theme,
   withTheme,
   defaultTheme
};

if (window) window.dotNetifyElements = dotNetifyElements;
module.exports = dotNetifyElements;
