import React, { useContext } from 'react';
import { LinkListContext } from '../../contexts';

function GenerateCodeButton() {
  const context = useContext(LinkListContext);

  const handleCreate = () => {
    context.set(context.linkItems.map((item) => {
      if (!item.code || item.code === '') {
        // TODO: Interact with backend
        return {
          code: (Math.floor(Math.random() * 1000000000 + 1)).toString(),
          link: item.link,
        };
      }
      return item;
    }));
  };

  return (
    <div className="space-y-5 w-full flex flex-col items-center">
      <button
        onClick={handleCreate}
        type="button"
        className="rounded-3xl w-24 h-10 text-sm md:text-md font-normal bg-gray-1 dark:bg-gray-5 text-gray-5 dark:text-gray-2 border dark:border-gray-5 border-gray-1 hover:border-green lg:w-28 lg:h-11 lg:text-lg"
      >
        Generate!
      </button>
    </div>
  );
}

export default GenerateCodeButton;
