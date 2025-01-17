import * as React from 'react';
import { Popover, PopoverTrigger, PopoverContent, PopoverProps } from './index';
import { makeStyles } from '@fluentui/react-make-styles';

const useStyles = makeStyles({
  example: {
    padding: '12px',
  },
});

const ExampleContent = () => {
  const { example } = useStyles();
  return (
    <div className={example}>
      <h3>Popover content</h3>

      <div>This is some popover content</div>
    </div>
  );
};

export const Default = (props: PopoverProps) => (
  <Popover {...props}>
    <PopoverTrigger>
      <button>Popover trigger</button>
    </PopoverTrigger>

    <PopoverContent>
      <ExampleContent />
    </PopoverContent>
  </Popover>
);

Default.argTypes = {
  openOnContext: {
    defaultValue: false,
    control: 'boolean',
  },

  openOnHover: {
    defaultValue: false,
    control: 'boolean',
  },
};

export const AnchorToTarget = () => {
  const [target, setTarget] = React.useState<HTMLButtonElement | null>();

  return (
    <>
      <div>
        <Popover target={target}>
          <PopoverTrigger>
            <button>Popover trigger</button>
          </PopoverTrigger>

          <PopoverContent>
            <ExampleContent />
          </PopoverContent>
        </Popover>
      </div>

      <button style={{ marginTop: 100 }} ref={setTarget}>
        Custom target
      </button>
    </>
  );
};

export const Controlled = () => {
  const [open, setOpen] = React.useState(false);
  const onOpenChange: PopoverProps['onOpenChange'] = (_, data) => setOpen(data.open || false);

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger>
        <button>Controlled trigger</button>
      </PopoverTrigger>
      <PopoverContent>
        <ExampleContent />
      </PopoverContent>
    </Popover>
  );
};

export const WithCustomTrigger = () => {
  const [open, setOpen] = React.useState(false);
  const [target, setTarget] = React.useState<HTMLElement | null>(null);
  const onClick = () => setOpen(s => !s);
  const onOpenChange: PopoverProps['onOpenChange'] = (_, data) => setOpen(data.open || false);

  return (
    <>
      <button style={{ width: 100, border: '1px solid red' }} aria-haspopup ref={setTarget} onClick={onClick}>
        Custom trigger
      </button>
      <Popover target={target} open={open} onOpenChange={onOpenChange}>
        <PopoverContent>
          <ExampleContent />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default {
  title: 'Components/Popover',
  component: Popover,
};
