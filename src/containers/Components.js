import Avatar from '../components/Avatar'
import Card from '../components/Card'
import Text from '../components/Text'

import intersperse from '../helpers/intersperse'

const ExamplesWrapper = ({ children }) => intersperse(children, <div style={{ marginBottom: '8px' }} />)

const Components = () => (
  <div>
    <Card title="Text">
      <ExamplesWrapper>
        <Text uiStyle="title-l-bold">Title L Bold - Gray darker</Text>
        <Text uiStyle="title-s-bold">Title S Bold - Gray darker</Text>
        <Text uiStyle="body-s-bold">Body S Bold - Gray darker</Text>
        <Text uiStyle="body-s-regular">Body S Regular - Gray darker</Text>
        <Text uiStyle="body-xs-bold">Body XS Bold - Gray darker</Text>
        <Text uiStyle="body-xs-regular">Body XS Regular - Gray darker</Text>
        <Text uiStyle="body-xs-regular" color="gray">
          Body XS Regular - Gray
        </Text>
      </ExamplesWrapper>
    </Card>
    <Card title="Avatar">
      <ExamplesWrapper>
        <Avatar size="xsmall" />
        <Avatar size="small" />
        <Avatar size="medium" />
        <Avatar size="large" />
        <Avatar size="small" text="DL" />
        <Avatar
          size="small"
          src="https://www.endermologie.com/fr/wp-content/uploads/sites/49/2017/09/homme-visage.png"
        />
      </ExamplesWrapper>
    </Card>
    <Card title="Checkbox">
      <Text uiStyle="title-s-bold">Text</Text>
    </Card>
    <Card title="Radio">
      <Text uiStyle="title-s-bold">Text</Text>
    </Card>
  </div>
)

export default Components
