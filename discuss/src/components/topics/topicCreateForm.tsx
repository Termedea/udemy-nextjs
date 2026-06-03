'use client';
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@nextui-org/react';
import { useActionState } from 'react';
import { createTopic } from '@/actions/topic';
export default function TopicCreateForm() {
  //error message is refering to the type of the formState-object, as declared in the server action
  const [formState, action] = useActionState(createTopic, {
    errors: {}
  });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Enter topic title"
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Enter topic description"
            />
            <Button color="primary" type="submit">
              Create
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
