'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.block.voting.Voting} tx
 * @transaction
 */
function vote(tx) {
    if(!tx.vote.ifVoted){
        tx.candidateVotes.votes=tx.candidateVotes.votes + 1
        return getAssetRegistry('org.block.voting.CandidateVotes')
        .then(function(ar){
            ar.update(tx.candidateVotes)
        }
        )
        .then(function(){
            return getAssetRegistry('org.block.voting.Vote')
            .then(function(ar){
                tx.vote.ifVoted=true
                ar.update(tx.vote)
            })
        });
    }
   
}