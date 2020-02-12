import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheets';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter></ClickCounter>
        <HoverCounter></HoverCounter>
        {/* <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
        </ErrorBoundary> */}
        {/* <PortalDemo></PortalDemo> */}
        {/* <FRParentInput></FRParentInput> */}
        {/* <FocusInput></FocusInput> */}
        {/* <RefsDemo></RefsDemo> */}
        {/* <ParentComp></ParentComp> */}
        {/* <PureComp></PureComp> */}
        {/* <Table></Table> */}
        {/* <FragmentDemo></FragmentDemo> */}
        {/* <LifecycleA></LifecycleA> */}
        {/* <Form></Form> */}
        {/* <h1 className="error">Error</h1> */}
        {/* <h1 className={styles.sucess}>Sucess</h1> */}
        {/* <Inline></Inline> */}
        {/* <Stylesheet primary={true}></Stylesheet> */}
        {/* <NameList></NameList> */}
        {/* <UserGreeting></UserGreeting> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <EventBind></EventBind> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <ClassClick></ClassClick> */}
        {/* <Counter></Counter> */}
        {/* <Message></Message> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet> */}
        {/* <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet> */}
        {/* <Greet name="Diana" heroName="Wonder Woman"></Greet> */}
        {/* <Welcome name="Bruce" heroName="Batman"></Welcome> */}
        {/* <Welcome name="Clark" heroName="Superman"></Welcome>
        <Welcome name="Diana" heroName="Wonder Woman"></Welcome>
        <Hello></Hello> */}
      </div>
    );
  }
}

export default App;
