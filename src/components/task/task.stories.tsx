
import { fn } from "@storybook/test";

import Task from './task';

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
  parameters: {
    docs: {
      description: {
        component: 'A task component that represents a single task item.',
      },
    },
  },
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};