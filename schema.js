//import graphql
const graphql = require('graphql')

/*
we get the GraphQLSchema, GraphQLObjectType 
and GraphQLString objects
*/
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = graphql

/*
define the schema value by initializing 
a new GraphQLSchema instance, passing 
an object which contains a query 
property. This property is an instance 
of a GraphQLObjectType object. This object
contains a set of properties, one for each
field of our schema. 
Our resolver returns a simple string - 
that -s when we ask for a 'hello' field,
we get back the string 'Hello world'

*/
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: {
			hello: {
				type: GraphQLString,
        		resolve() {
          		return 'Hello world'
			}
		}
  	})
})
module.exports = schema






















