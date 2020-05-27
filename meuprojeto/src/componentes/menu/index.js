import React from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";

function AppMenu() {

  
  return (
    <Menu theme="dark" mode="horizontal"  defaultSelectedKeys={['1']}>
      <Menu.Item key="1" className="customclass">
        <span>Home</span>
        <Link to="/" />
      </Menu.Item>
      <Menu.Item key="2" className="customclass">
        <span>Cadastrar funcionario</span>
        <Link to="/funcionario" />
      </Menu.Item>
      <Menu.Item key="3" className="customclass">
        <span>Cadastro Peças</span>
        <Link to="/carro" />
      </Menu.Item>
      <Menu.Item key="4" className="customclass">
        <span>Cadastro de Cliente</span>
        <Link to="/cadastrar" />
      </Menu.Item>
      <Menu.Item key="5" className="customclass">
        <span>Listagem de Peças</span>
        <Link to="/listacarro" />
      </Menu.Item>
      <Menu.Item key="6" className="customclass">
        <span>Listagem de clientes</span>
        <Link to="/lista" />
      </Menu.Item>
      <Menu.Item key="7" className="customclass">
        <span>Listagem de Funcionarios</span>
        <Link to="/listafuncionario" />
      </Menu.Item>
    </Menu>
  );
}

export default AppMenu;