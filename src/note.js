import React from 'react'
import {Card, Divider} from 'antd'

export const Note = ({title, type, text, tags, result}) =>{
    const conclusion = type === "postmortem" ? "Damage" : "Conclusion"
  return (
      <Card title={title}>
          {text}

          {result && 
            <>
              <Divider/>
              <span>{conclusion}: {result}</span>
            </>
          }
      </Card>
  )
}


export const Notes = [
    {
        type: "note",
        title: "Maybe you do not need GraphQL. Part 1.",
        text: <article>
            <p>Consider the case. Services A exposes GQL API. Services B and C consume this API and do semantically the same thing and use the SAME queries.</p>
            <p>Believe me there are cases when 2 services really need to use the same queries and ALWAYS the same queries.</p>
            <p>From this moment you will make efforts on versioning/sharing this queries.
               If you have 50+ queries to be consistent and shared between services your code is not maintainable yet. 
            </p>
            <p>Please consider simple stupid REST endpoints in this case.</p>
        </article>,
        tags: ["GraphQL", "API", "Pain"], 
        result: null
    },
    {
        type: "postmortem",
        title: "Do not forget to delete TMP indexes when using REINDEX INDEX idx_name CONCURRENTLY in PostgreSQL",
        text: <span>
              <p>Bloating is a known disadvantage of PostgreSQL garbage collection mechanisms.
                 If rows updates are intensive you may decide to automate REINDEX process.</p>
              <p>
                  Fresh versions of PostgreSQL support CONCURRENTLY option.
                  This means that index can still be used in query plans and updates smoothly using second index index_name_ccnew{1,2,3}.
                  Sometimes PostgreSQL `forget` to delete temporary index created. It will never be considered in query plan but still holds space and replicates on followers.
                  If such indexes are heavy replication lag increases to hours.
              </p>   
            </span>, 
        tags: ["PostgreSQL"],    
        result: "15+ tmp indexes(60+gb) were replicating from main to follower instance. Replication lag exceeded 1hr."
    }, 
    {
        type: "postmortem",
        title: "If you use Materialized views with CONCURRENTLY refresh do not forget to add total Unique Index on this view.",
        text: <article>
            <p>Code was tested without CONCURRENTLY option and PostgreSQL exception was missed</p>
        </article>,
        result: "View was out of sync from query for 1 month before we spotted the problem"
    }, 
    {
        type: "idea", 
        title: "Use ElasticSearch as dummy key-value database",
        text: <article>
          <p>We had a very specific task— find a distributed fault-tolerant K/V storage for large JSON documents with high read RPS.</p>
          <p>Riak K/V, Scylla and MongoDB(not a kv but why not) as test databases.</p>
          <p>
              Multicluster configuration. Riak destroyed all and it was settled to use Riak.
              But we really forgot about ElasticSearch, I mean /index_name/:id GET Requests.
          </p>
          <p>ElasticSearch without search is funny and sounds crazy but it really can help.</p>
        </article>
    },

    {
        type: "postmortem", 
        title: "Never use Erlang's odbc if you need its streaming API", 
        text: <article>
            <p>Sometimes ODBC is the only way to connect to a database which is not popular in Elixir/Erlang world
               Apache Impala in my case. Usually a lot of data is stored in Hadoop :).
               So you decide to fetch selected dataset in batches. 
            </p>
            <p>
                The problem is driver's odbc.next_batch function stores previous batch into memory :). OOM kills the app in minutes.
            </p>
        </article>,
        result: "Took Python's impyla library and used Erlang Port feature to interact with fetchers from erlang. Perfect usage of erlang ports."
    }
]
