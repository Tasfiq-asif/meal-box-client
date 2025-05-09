"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Utensils, 
  CalendarClock, 
  PackageCheck, 
  Settings, 
  Users, 
  ClipboardList, 
  ChefHat, 
  Clock, 
  Truck
} from "lucide-react";

export default function HowItWorksPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-orange-100/40 to-white pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 lg:py-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-orange-600">
                How It Works
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                MealBox makes healthy eating and meal management effortless for both customers and providers. Here&apos;s how it works:
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/meal-plans">
                    Browse Meal Plans
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative hidden lg:block h-[400px]"
            >
              <Image
                src="/images/meal-preparation.jpg"
                alt="Meal preparation process"
                fill
                className="object-cover rounded-lg shadow-xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Steps for Customers */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-orange-600">For Customers</h2>
            <p className="text-gray-600">Four simple steps to start enjoying healthy, delicious meals</p>
          </div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={item}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                  <div className="mb-4 rounded-full bg-orange-100 p-4">
                    <Utensils className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Select Your Meal Plan</h3>
                  <p className="text-gray-600">
                    Browse and choose from a variety of meal plans tailored to your dietary preferences.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                  <div className="mb-4 rounded-full bg-orange-100 p-4">
                    <Settings className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Personalize Your Choices</h3>
                  <p className="text-gray-600">
                    Customize your meals based on taste, allergies, and nutrition needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                  <div className="mb-4 rounded-full bg-orange-100 p-4">
                    <CalendarClock className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Schedule Delivery</h3>
                  <p className="text-gray-600">
                    Pick convenient delivery times that fit your schedule.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                  <div className="mb-4 rounded-full bg-orange-100 p-4">
                    <PackageCheck className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Enjoy Your Meals</h3>
                  <p className="text-gray-600">
                    Receive chef-prepared meals at your doorstep and enjoy healthy eating without the hassle.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Image Feature */}
      <div className="py-12 bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[300px] md:h-[400px]"
            >
              <Image
                src="/images/chef-cooking.jpg"
                alt="Chef preparing a meal"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-orange-700">Benefits of MealBox</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Save Time</h3>
                    <p className="text-gray-600">No more meal planning, grocery shopping, or extensive cooking.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ChefHat className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Chef-Quality Meals</h3>
                    <p className="text-gray-600">Enjoy professionally prepared dishes with premium ingredients.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Convenient Delivery</h3>
                    <p className="text-gray-600">Meals delivered right to your door on your schedule.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Steps for Providers */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-orange-700">For Providers</h2>
            <p className="text-gray-600">Grow your food business with our streamlined platform</p>
          </div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={item}>
              <Card className="h-full transition-all hover:shadow-lg border-orange-200">
                <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                  <div className="mb-4 rounded-full bg-orange-100 p-4">
                    <ChefHat className="h-8 w-8 text-orange-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Create Meal Offerings</h3>
                  <p className="text-gray-600">
                    Add and manage your meal plans to reach more customers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full transition-all hover:shadow-lg border-orange-200">
                <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                  <div className="mb-4 rounded-full bg-orange-100 p-4">
                    <ClipboardList className="h-8 w-8 text-orange-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Manage Orders</h3>
                  <p className="text-gray-600">
                    Track and fulfill customer orders efficiently.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="h-full transition-all hover:shadow-lg border-orange-200">
                <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                  <div className="mb-4 rounded-full bg-orange-100 p-4">
                    <Users className="h-8 w-8 text-orange-700" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Update Profile</h3>
                  <p className="text-gray-600">
                    Keep your provider profile and services up to date.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers enjoying fresh, healthy meals every day.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-orange-50 border-white">
                <Link href="/findMeals">Browse Meal Plans</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white hover:bg-orange-700">
                <Link href="/signup">Sign Up Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 