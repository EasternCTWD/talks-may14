talks-may14
===========

This can be an easy way for us to learn more about using git and participate in an upcoming lightning talk. We all benefit from being in the group, this gives us all a chance to share something you have learned recently. 

To get started. Go to your Terminal or GUI for git and clone this repo down to your workspace. This will create a folder named `talks-may14` all files will be in there.

    $ git clone git@github.com:EasternCTWD/talks-may14.git

Create a branch to work from (replace "*my_branch_name*" with your own branch name. Your username/name would work fine)

    $ git branch my_branch_name
    $ git checkout my_branch_name

While you are working, commit your work often and push it up to the server in your branch.

    $ git add .
    $ git commit -m "my_commit_message"
    $ git push origin my_branch_name

You should get some feedback like this after you run the push command

	Counting objects: 5, done.
	Delta compression using up to 8 threads.
	Compressing objects: 100% (3/3), done.
	Writing objects: 100% (3/3), 507 bytes | 0 bytes/s, done.
	Total 3 (delta 2), reused 0 (delta 0)
	To git@github.com:EasternCTWD/talks-may14.git
		7d0411d..e28eb29  jaym -> jaym

Once you have pushed all your changes up to your branch on github you need to create a pull-request for your changes. That will send me a message to merge your branch into the master branch. Go to the [pull-request](https://github.com/EasternCTWD/talks-may14/pulls) page to create a new pull-request.

![pull it](/readme_img/pull1.png)

Next click the title of your branch to start the pull-request

![compare changes](/readme_img/compare1.png)

You will see details about the changes you made to the files you have committed.

![dif](/readme_img/dif.png)

Click the create pull-request button

![create](/readme_img/create.png)

Add some details about the commit if there are any worth mentioning. If it is just work on your own page then you don't have to go overboard.

![send](/readme_img/comment.png)

