import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="bg-slate-50 h-40 pb-14">
        <h1 className="w-52 pt-14  h-10 text-3xl font-extrabold ml-auto mr-auto">
          Question and Answer
        </h1>
      </div>
      <p className="pl-4 pr-4 mb-4 mt-3">1 : When should you use context api</p>
      <p className="pl-4 pr-4 mb-4">
        Anser: Context API use for storing the current theme of your application
        and make it available to all components. This way, whenever the user
        switches the theme (such as enabling dark mode), all components will be
        updated with the new theme.
      </p>

      <p className="pl-4 pr-4 mb-4">2 : What is custom hook</p>
      <p className="pl-4 pr-4 mb-4">
        Answer: A custom Hook is a JavaScript function whose name starts with
        ”use” and that may call other Hooks. That's it! If you have code in a
        component that you feel would make sense to extract, either for reuse
        elsewhere or to keep the component simpler, you can pull that out into a
        function.
      </p>
      <p className="pl-4 pr-4 mb-4">3 : Why should we use useRef</p>
      <p className="pl-4 pr-4 mb-4">
        Answer : The useRef Hook allows you to persist values between renders.
        It can be used to store a mutable value that does not cause a re-render
        when updated. It can be used to access a DOM element directly.
      </p>
      <p className="pl-4 pr-4 mb-4">4: Why should we use useMemo</p>
      <p className="pl-4 pr-4 mb-4">
        Fundamentally, useMemo and useCallback are tools built to help us
        optimize re-renders. They do this in two ways: Reducing the amount of
        work that needs to be done in a given render. Reducing the number of
        times that a component needs to re-render.
      </p>
    </div>
  );
};

export default Blog;
