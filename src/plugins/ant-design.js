import Vue from 'vue'
import {
  Avatar,
  Button,
  Badge,
  Breadcrumb,
  ConfigProvider,
  Checkbox,
  Dropdown,
  DatePicker,
  Drawer,
  Divider,
  Empty,
  Form,
  Input,
  Icon,
  message,
  Menu,
  Modal,
  notification,
  Popconfirm,
  Progress,
  Popover,
  Result,
  Spin,
  Select,
  Skeleton,
  Switch,
  Table,
  Tabs,
  Tag,
  Timeline,
  Tooltip,
  Upload,
} from 'ant-design-vue'

Vue.config.productionTip = false

Vue.use(Avatar)
Vue.use(Button)
Vue.use(Badge)
Vue.use(Breadcrumb)
Vue.use(ConfigProvider)
Vue.use(Checkbox)
Vue.use(Dropdown)
Vue.use(DatePicker)
Vue.use(Drawer)
Vue.use(Divider)
Vue.use(Empty)
Vue.use(Form)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Modal)
Vue.use(Popconfirm)
Vue.use(Progress)
Vue.use(Popover)
Vue.use(Result)
Vue.use(Spin)
Vue.use(Select)
Vue.use(Skeleton)
Vue.use(Switch)
Vue.use(Table)
Vue.use(Tabs)
Vue.use(Tag)
Vue.use(Timeline)
Vue.use(Tooltip)
Vue.use(Upload)

Vue.prototype.$message = message
Vue.prototype.$notify = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$confirm = Modal.confirm

// 完成组件列表
// Base,
// version,
// install,
// message,
// notification,
// Affix,
// Anchor,
// AutoComplete,
// Alert,
// Avatar,
// BackTop,
// Badge,
// Breadcrumb,
// Button,
// Calendar,
// Card,
// Collapse,
// Carousel,
// Cascader,
// Checkbox,
// Col,
// DatePicker,
// Divider,
// Dropdown,
// Form,
// FormModel,
// Icon,
// Input,
// InputNumber,
// Layout,
// List,
// LocaleProvider,
// Menu,
// Mentions,
// Modal,
// Pagination,
// Popconfirm,
// Popover,
// Progress,
// Radio,
// Rate,
// Row,
// Select,
// Slider,
// Spin,
// Statistic,
// Steps,
// Switch,
// Table,
// Transfer,
// Tree,
// TreeSelect,
// Tabs,
// Tag,
// TimePicker,
// Timeline,
// Tooltip,
// Upload,
// Drawer,
// Skeleton,
// Comment,
// ConfigProvider,
// Empty,
// Result,
// Descriptions,
// PageHeader,
