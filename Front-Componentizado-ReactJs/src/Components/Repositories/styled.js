import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const ContainerTabs = styled(Tabs) `
 font-size: 1rem;
 width: 100%; 
 margin-top: 0.5rem
`;

export const ContainerTabBorderList = styled.div `
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
`;
ContainerTabBorderList.tabsRole = "ContainerTabBorderList";

export const ContainerTabList = styled(TabList) `
list-style-type: none
padding: 0.25rem;
display: flex;
margin: 0;
`;
ContainerTabList.tabsRole = "TabList";

export const ContainerTab = styled(Tab) `
border-radius: 1rem;
border: 1px solid #ccc;
padding: 0.8rem;
use-select: none;
cursor: pointer;
z-index: 99999;
background-color: #fff;
margin: 0.5rem;

&:focus {
    outline: none;
}

&.is-selected {
    box-shadow: 0.3125rem 0.1875rem 0.3125rem rgba(0, 0, 0, 0.1);
}
`;
ContainerTab.tabsRole = "Tab";

export const ContainerTabPanel = styled(TabPanel) `
padding: 0.8rem;
border: 1px solid #ccc;
margin-top: -0.3125rem;
display: none;

&.is-selected {
    display: block;
}

`;
ContainerTabPanel.tabsRole = "TabPanel";