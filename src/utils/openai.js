import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true 
});

export default openai