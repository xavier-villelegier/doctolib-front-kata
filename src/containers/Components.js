import Avatar from '../components/Avatar'
import Badge from '../components/Badge'
import Card from '../components/Card'
import Checkbox from '../components/Checkbox'
import Text from '../components/Text'
import Toggle from '../components/Toggle'

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
      <ExamplesWrapper>
        <Checkbox />
        <Checkbox error />
      </ExamplesWrapper>
    </Card>
    <Card title="Toggle">
      <ExamplesWrapper>
        <Toggle />
      </ExamplesWrapper>
    </Card>
    <Card title="Badge">
      <ExamplesWrapper>
        <Badge>Badge</Badge>
      </ExamplesWrapper>
    </Card>
  </div>
)

export default Components
