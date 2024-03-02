import {Navbar, Button, Alignment} from '@blueprintjs/core';

const Toolbar = () => {
  return (
  <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>AKASM</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp5-minimal" icon="projects" text="Projects" />
          <Button className="bp5-minimal" icon="help" text="Help" />
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
          <Button className="bp5-minimal" icon="settings"/>
      </Navbar.Group>
  </Navbar>
  )
}




export default Toolbar;