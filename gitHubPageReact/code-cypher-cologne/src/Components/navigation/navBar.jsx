import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Navigation() {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="https://www.google.com/search?source=hp&ei=FQAFX57bCs-WsAeNw5joCA&q=hui&oq=hui&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIILjICCC4yAggAMggILhDHARCvATICCAAyAggAMgIIADICCC46CwguEMcBEKMCEJMCOggILhDHARCjAlD3PljLQWDgRWgBcAB4AIABeYgBpwKSAQMyLjGYAQCgAQGqAQdnd3Mtd2l6sAEA&sclient=psy-ab&ved=0ahUKEwjeuYzkoLzqAhVPC-wKHY0hBo0Q4dUDCAg&uact=5" target="_blank">Navbar</Navbar.Brand>
      </Navbar>
    </>
  );
}