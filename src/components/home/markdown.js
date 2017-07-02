import React from 'react';
import ReactMarkdown from 'react-markdown'
import { Notice } from '../';

const Markdown = ({ source, isOpen, close }) => {

   return (
      <Notice close={close} msg={<ReactMarkdown source={source} />} isOpen={isOpen} />
   );
};

export default Markdown;
