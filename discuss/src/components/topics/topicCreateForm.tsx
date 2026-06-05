'use client';
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Alert
} from '@nextui-org/react';
import { useActionState, useTransition } from 'react';
import { createTopic } from '@/actions/topic';

export default function TopicCreateForm() {
  //error message is refering to the type of the formState-object, as declared in the server action
  const [formState, action] = useActionState(createTopic, {
    errors: {}
  });

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      action(formData);
    });
  };

  return (
    <Popover placement="left-start">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[500px]">
        <form onSubmit={handleSubmit} noValidate className="w-full">
          <div className="flex flex-col gap-4 p-4 ">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Enter topic name"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(' ')}
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="outside"
              placeholder="Enter topic description"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(' ')}
            />
            {formState.errors._form && (
              <Alert color="danger" variant="flat">
                {formState.errors._form.join(' ')}
              </Alert>
            )}
            <Button color="primary" type="submit">
              Create
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
