"use client";
import { Suspense, useDeferredValue, useMemo, useState } from "react";
import quotes from "./quotes";

const UseDeferredValueApp = () => {
  const [quote, setQuote] = useState([]);

  const deferQuote = useDeferredValue(quote);

  const quoteList = useMemo(() => {
    const filteredQuote = quotes.filter((list) =>
      list.quote.includes(deferQuote)
    );
    return filteredQuote;
  }, [deferQuote]);
  return (
    <>
      <div className="wrapper">
        <h3 className="title">useDeferredValue Explained</h3>
        <input
          type="text"
          placeholder="🔍 Search ....."
          className="border-gray-500 border p-3"
          onChange={(e) => setQuote(e.target.value)}
        />
        <Suspense
          fallback={<h3 className="text-3xl font-bold">Loading .....</h3>}
        >
          <ul className="mt-6 grid grid-cols-1 gap-3">
            {quoteList.map((list, index) => {
              return <li key={index}>{list.quote}</li>;
            })}
          </ul>
        </Suspense>
      </div>
    </>
  );
};

export default UseDeferredValueApp;
